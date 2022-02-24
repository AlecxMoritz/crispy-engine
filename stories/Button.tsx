import React, { ReactElement } from 'react';

/*
 * placeholder
 */
interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps): ReactElement  => {
  return (
    <h1 className="text-5xl text-slate-600">
      {label}
    </h1>
  );
};
