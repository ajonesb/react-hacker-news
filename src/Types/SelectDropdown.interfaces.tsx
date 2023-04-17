export interface SelectDropdownProps {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  children: React.ReactNode;
}
