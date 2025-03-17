import { Button, CustomFlowbiteTheme } from "flowbite-react";

export const customButton: CustomFlowbiteTheme['button'] = {
    color: {
        default: "border-none bg-black dark:bg-white p-2 w-36 font-bold text-white dark:text-black rounded-full uppercase font-mono ring-black dark:ring-white hover:ring-8 hover:underline ease-out duration-300 transition-all transition-discrete",
    },
};

const customIconButton: CustomFlowbiteTheme['button'] = {
    color: {
        default: "border-none bg-black dark:bg-white p-2 w-36 font-bold text-white dark:text-black rounded-full uppercase font-mono ring-black dark:ring-white hover:ring-8 hover:underline ease-out duration-300 transition-all transition-discrete",
    },
};

export function TextButton({
    children,
    href
  }: Readonly<{
    children: React.ReactNode;
    href: string;
  }>) {
    return (
        <Button theme={customButton} pill color="default" size="xl" as={"a"} href={href}>
            {children}
        </Button>
    );
}

export function ActionButton({
    children,
    action
  }: Readonly<{
    children: React.ReactNode;
    action: () => void;
  }>) {
    return (
        <Button theme={customButton} pill color="default" size="xl" onClick={action}>
            {children}
        </Button>
    );
}

export function IconButton({
    children,
    href
  }: Readonly<{
    children: React.ReactNode;
    href: string;
  }>) {
    return (
        <Button theme={customIconButton} pill color="default" size="xl" as={"a"} href={href}>
            {children}
        </Button>
    );
}