declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
  export default ReactComponent;
}
