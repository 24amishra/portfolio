/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

const TABS = [
  { key: 'books', label: 'Books' },
  { key: 'substacks', label: 'Newsletters' },
  { key: 'youtube', label: 'YouTubers' },
];

function BookCard({ item }) {
  const Card = item.link ? 'a' : 'div';
  return (
    <Card
      {...(item.link ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="shrink-0 w-[100px] group"
      title={item.note || undefined}
    >
      {item.cover ? (
        <img
          src={item.cover}
          alt={item.title}
          className="w-[100px] h-[150px] object-cover rounded border border-neutral-200 group-hover:border-[#337ab7]/40 transition-colors duration-150"
        />
      ) : (
        <div className="w-[100px] h-[150px] rounded border border-neutral-200 bg-neutral-50 flex items-center justify-center text-[10px] text-neutral-400 text-center px-2">
          {item.title}
        </div>
      )}
      <p className="text-xs text-neutral-700 mt-1.5 truncate">{item.title}</p>
      <p className="text-[#337ab7] text-xs truncate">{item.author}</p>
    </Card>
  );
}

function SourceCard({ item }) {
  const Card = item.link ? 'a' : 'div';
  return (
    <Card
      {...(item.link ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="shrink-0 w-[200px] border border-neutral-200 rounded p-4 hover:border-[#337ab7]/40 transition-colors duration-150"
    >
      <p className="text-sm text-neutral-900 font-medium leading-snug">{item.name}</p>
      {item.author && <p className="text-sm text-[#337ab7] mt-0.5">{item.author}</p>}
      {item.note && <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">{item.note}</p>}
    </Card>
  );
}

export default function ReadingShelf({ books = [], substacks = [], youtube = [] }) {
  const [active, setActive] = useState('books');
  const items = { books, substacks, youtube }[active];

  return (
    <>
      <div className="flex flex-wrap gap-2 mt-4 mb-6" role="tablist">
        {TABS.map((tab) => {
          const selected = tab.key === active;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(tab.key)}
              className={`text-[11px] font-mono border rounded-full px-2.5 py-0.5 transition-colors duration-150 ${
                selected
                  ? 'text-[#337ab7] border-[#337ab7]/50 bg-[#337ab7]/5'
                  : 'text-neutral-500 border-neutral-200 hover:text-[#337ab7] hover:border-[#337ab7]/40'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {items.length === 0 ? (
        <p className="text-xs text-neutral-400">Coming soon.</p>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {items.map((item, i) =>
            active === 'books' ? <BookCard key={i} item={item} /> : <SourceCard key={i} item={item} />
          )}
        </div>
      )}
    </>
  );
}
