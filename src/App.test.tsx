import App from './App';
import { describe, it, expect } from 'vitest';
import {render} from '@testing-library/react';

describe ('App', () => {
  it('should display application started', () => {
    const result = render(<App />);
    expect(result).toContain(/application started/g);
  });
});