import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { colors, spacing, fontSizes } from '../config/theme';
import { scale, verticalScale } from '../utils/responsive';
import Chevron from '../assets/images/Arrow-Down.svg';

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: DropdownOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue,
  onValueChange,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (value: string) => {
    onValueChange(value);
    setOpen(false);
  };

  const selectedLabel =
    options.find(o => o.value === selectedValue)?.label || '';

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setOpen(prev => !prev)}
      >
        <Text style={styles.text}>{selectedLabel || 'Selecciona estado'}</Text>
        <View style={styles.iconWrapper}>
          <Chevron width={scale(15)} height={verticalScale(18)} />
        </View>
      </TouchableOpacity>

      {open && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={item => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item.value)}
              >
                <Text style={styles.optionText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: spacing.md,
    zIndex: 1000,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(60),
    paddingHorizontal: spacing.lg,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: verticalScale(22),
    backgroundColor: 'white',
  },
  text: {
    fontSize: fontSizes.base,
    color: colors.textSecondary,
  },
  iconWrapper: {
    marginLeft: spacing.sm,
  },
  dropdown: {
    position: 'absolute',
    top: verticalScale(60) + spacing.sm,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: verticalScale(10),
    maxHeight: verticalScale(150),
  },
  option: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  optionText: {
    fontSize: fontSizes.base,
    color: colors.text,
  },
});
