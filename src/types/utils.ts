import React from "react";

interface BaseLayoutProps {
    children?: React.ReactNode
}

export type LayoutWithChildren = React.FC<BaseLayoutProps>;