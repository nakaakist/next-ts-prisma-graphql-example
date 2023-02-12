import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { HTMLAttributes } from "react";
import classnames from "classnames";

export const Spinner = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={classnames("text-caption w-8 h-8", className)} {...props}>
    <FontAwesomeIcon icon={faSpinner} className="animate-spin h-full w-full" />
  </div>
);
