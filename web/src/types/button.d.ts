type Button = React.ButtonHTMLAttributes<HTMLButtonElement>
export interface ButtonProps extends Button {
  buttonClick:()=>void;
  buttonName:string
}