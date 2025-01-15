import { Button, CustomFlowbiteTheme } from "flowbite-react";

const customButton: CustomFlowbiteTheme['button'] = {
    color: {
        default: "border-none bg-black dark:bg-white p-2 w-36 font-bold text-white dark:text-black rounded-full uppercase font-mono ring-black dark:ring-white hover:ring-8 hover:underline",
    },
};

const customIconButton: CustomFlowbiteTheme['button'] = {
    color: {
        default: "border-none bg-black dark:bg-white p-2 w-36 font-bold text-white dark:text-black rounded-full uppercase font-mono ring-black dark:ring-white hover:ring-8 hover:underline",
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