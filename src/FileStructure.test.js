// FileStructure.test.js

import { render, fireEvent } from '@testing-library/react';
import FileStructure from './FileStructure';

const mockData = [
  {
    name: 'Parent Node',
    type: 'folder',
    children: [
      {
        name: 'Child Node',
        type: 'file',
      },
    ],
  },
];

test('renders FileStructure component with data', () => {
  const { getByText } = render(<FileStructure data={mockData} />);

  // Check if the parent node is rendered
  expect(getByText('Parent Node')).toBeInTheDocument();
});

test('expands and collapses items on click', () => {
  const { getByText, queryByText } = render(<FileStructure data={mockData} />);

  // Click the parent node to expand it
  fireEvent.click(getByText('Parent Node'));

  // Check if the child node is rendered
  expect(getByText('Child Node')).toBeInTheDocument();

  // Click the parent node again to collapse it
  fireEvent.click(getByText('Parent Node'));

  // Check if the child node is not rendered anymore
  expect(queryByText('Child Node')).toBeNull();
});