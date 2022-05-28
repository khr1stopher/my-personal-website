import React from 'react'

export default interface SectionPageProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
    maxHeight?: string;
    hScreem?: string;
    styles?: React.CSSProperties;
}