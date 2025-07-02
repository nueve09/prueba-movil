import React, { useMemo, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { useTasksQuery } from '../../hooks/useTasks';
import { useAuthStore } from '../../state/useAuthStore';
import { useTaskStore } from '../../state/useTaskStore';
import { colors, fonts, fontSizes, spacing } from '../../config/theme';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { fontScale, scale, verticalScale } from '../../utils/responsive';
import Trash from '../../assets/images/Trash.svg';
import Edit from '../../assets/images/Edit.svg';
import HeaderHome from '../../components/HeaderHome';
import Loader from '../../components/Loader';

const TASKS_PER_PAGE = 10;

const TaskScreen = ({ navigation }: any) => {
  const { isLoading, isError, tasks } = useTasksQuery();
  const deleteTask = useTaskStore(state => state.deleteTask);

  const userId = useAuthStore(state => state.user?.userId) ?? 0;

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let base = tasks || [];

    if (userId !== 0) {
      base = base.filter(t => t.userId === userId);
    }

    if (!search.trim()) {
      return base;
    }

    const q = search.trim().toLowerCase();
    const numQ = Number(q);

    return base.filter(t => {
      if (q === 'completada') {
        return t.completed;
      }
      if (q === 'incompleta') {
        return !t.completed;
      }

      if (!Number.isNaN(numQ)) {
        return t.id === numQ || t.userId === numQ;
      }

      return t.title.toLowerCase().includes(q);
    });
  }, [tasks, search, userId]);

  const total = Math.ceil(filtered.length / TASKS_PER_PAGE) || 1;
  const paginated = filtered.slice(
    (page - 1) * TASKS_PER_PAGE,
    page * TASKS_PER_PAGE,
  );

  useEffect(() => {
    setPage(1);
  }, [search, userId]);
  console.log(paginated);

  const confirmDelete = (id: number) =>
    Alert.alert('Eliminar tarea', '¿Estás seguro?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Eliminar', style: 'destructive', onPress: () => deleteTask(id) },
    ]);

  const renderItem = ({ item }: any) => (
    <Swipeable
      renderRightActions={() => (
        <View style={styles.deleteButton}>
          <Text style={styles.deleteSwipBtn}>¿Eliminar?</Text>
        </View>
      )}
      onSwipeableWillOpen={direction => {
        if (direction === 'left') {
          confirmDelete(item.id);
        }
      }}
    >
      <View style={styles.taskItem}>
        <View style={styles.taskInfo}>
          <Text
            style={[styles.taskTitle, item.completed && styles.completedText]}
          >
            {item.completed ? 'Completada' : 'Incompleta'}
          </Text>
          <Text style={styles.taskDesc}>{item.title}</Text>
        </View>
        <View style={styles.taskActions}>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditTask', { id: item.id })}
            style={styles.btnEdit}
          >
            <Edit />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => confirmDelete(item.id)}>
            <Trash />
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  );

  if (isLoading) return <Loader />;

  if (isError)
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.errorText}>Error al cargar tareas</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <HeaderHome>
        <Input
          placeholder="Buscar tarea"
          value={search}
          onChangeText={setSearch}
        />
        <Button
          title="Agregar"
          onPress={() => navigation.navigate('AddTask')}
        />
      </HeaderHome>

      <View style={styles.contentTaskCount}>
        <Text style={styles.taskCount}>
          {filtered.length} tareas registradas
        </Text>
      </View>

      <ScrollView
        style={styles.mainContent}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={paginated}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          style={styles.taskList}
          scrollEnabled={false}
        />

        {paginated.length > 1 ? (
          <View style={styles.paginationRow}>
            <TouchableOpacity
              style={styles.btnPagination}
              disabled={page === 1}
              onPress={() => setPage(p => Math.max(p - 1, 1))}
            >
              <Text style={styles.arrowBtnPagination}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.pageText}>
              {page} / {total}
            </Text>
            <TouchableOpacity
              style={styles.btnPagination}
              disabled={page === total}
              onPress={() => setPage(p => Math.min(p + 1, total))}
            >
              <Text style={styles.arrowBtnPagination}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
  },
  scrollContent: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.xl,
  },
  contentTaskCount: {
    alignItems: 'center',
    marginTop: verticalScale(30),
  },
  taskCount: {
    fontSize: fontScale(16),
    fontWeight: '500',
    color: colors.textSecondary,
    fontFamily: fonts.latoLightItalic,
  },
  taskList: {
    flex: 1,
  },
  listContent: {
    flexGrow: 1,
    paddingBottom: spacing.md,
  },
  taskItem: {
    backgroundColor: colors.background,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.borderGray,
    height: verticalScale(93),
    padding: spacing.lg,
    marginBottom: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontWeight: '500',
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
    fontFamily: fonts.latoLight,
  },
  taskDesc: {
    fontSize: fontSizes.xs,
    color: colors.text,
    fontFamily: fonts.latoLight,
    fontWeight: '500',
  },
  completedText: {
    color: colors.purpleTransparent,
    fontFamily: fonts.latoLight,
    fontWeight: '500',
    fontSize: fontSizes.sm,
  },
  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnEdit: {
    paddingRight: 15,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  errorText: {
    color: colors.error,
    fontSize: fontScale(14),
  },
  paginationRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.md,
    gap: spacing.md,
  },
  pageText: {
    fontSize: fontScale(14),
    color: colors.text,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: colors.error,
    justifyContent: 'center',
    width: '30%',
    height: '80%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  deleteSwipBtn: {
    textAlign: 'right',
    color: colors.background,
  },
  btnPagination: {
    backgroundColor: colors.primary,
    borderRadius: scale(20),
    width: scale(40),
    height: verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowBtnPagination: {
    color: colors.background,
    fontSize: fontSizes.lg,
  },
});
