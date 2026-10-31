import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = process.env.NEXT_PUBLIC_MARKETING_URL || 'https://billenza.com';

  const schemaItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl,
    },
    ...items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 2,
      name: it.label,
      item: it.href ? `${baseUrl}${it.href}` : undefined,
    })),
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <Link href="/" title="Billenza Home">
          <Home size={14} style={{ marginRight: 2 }} />
          Home
        </Link>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <span className="sep" aria-hidden="true">
                <ChevronRight size={13} />
              </span>
              {isLast || !item.href ? (
                <span className="current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
