import { StyledSelectDropdown } from "./styles";

interface SelectDropdownProps {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  children: React.ReactNode;
}

const SelectDropdown = ({
  id,
  onChange,
  value,
  children,
}: SelectDropdownProps) => {
  return (
    <StyledSelectDropdown id={id} onChange={onChange} value={value}>
      {children}
    </StyledSelectDropdown>
  );
};

export default SelectDropdown;
