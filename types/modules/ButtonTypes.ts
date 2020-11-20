export interface BasicButtonProps {
  text: string;
  className?: string;
  submit?: boolean;
  disabled?: boolean;
  disabledText?: string;
  onClick?: () => void;
}