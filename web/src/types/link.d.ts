export interface singleLink {
  name: string;
  route: string;
}

export interface linkType
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  links: Array<singleLink>;
  navigate?: (route: string) => MouseEventHandler<HTMLDivElement> | undefined;
}
