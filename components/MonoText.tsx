'use client';

export function MonoTitle({
    className,
    children
  }: Readonly<{
    className: string;
    children: React.ReactNode;
  }>) {
    return (
        <h1 className={`${className} font-mono`}>{children}</h1>
    );
}

export function MonoText({
    className,
    children
  }: Readonly<{
    className?: string;
    children: React.ReactNode;
  }>) {
    return (
        <p className={`${className} font-mono`}>{children}</p>
    );
}