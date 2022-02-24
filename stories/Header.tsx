import React, { ReactElement } from 'react';

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps): JSX.Element  => {
  return (
    <h1 className="text-3xl font-bold text-slate-600">
      {label}
    </h1>
  );
};
