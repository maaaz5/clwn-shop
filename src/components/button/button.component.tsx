import { FC, ButtonHTMLAttributes } from "react";
import {
  BaseButton,
  GoogleSignInButton,
  Inverted,
  SpinnerContainer,
} from "./button.styles";

export enum BUTTON_TYPES_CLASSES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: Inverted,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPES_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <SpinnerContainer /> : children}
    </CustomButton>
  );
};

export default Button;
