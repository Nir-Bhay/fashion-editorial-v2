// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import Sidebar from './Sidebar';
import React from 'react';

describe('Sidebar Performance', () => {
  it('renders quickly', () => {
    const start = performance.now();
    const iterations = 10000;

    for (let i = 0; i < iterations; i++) {
      renderToStaticMarkup(<Sidebar />);
    }

    const end = performance.now();
    const duration = end - start;

    console.log(`Rendered ${iterations} times in ${duration.toFixed(2)}ms`);
    console.log(`Average time per render: ${(duration / iterations).toFixed(4)}ms`);

    // Basic correctness check
    const markup = renderToStaticMarkup(<Sidebar />);
    expect(markup).toContain('Category');
    expect(markup).toContain('Filter');
    expect(markup).toContain('bg-black');
  });
});
