'use client'
import styled from "styled-components"

export const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: white;
  
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
`;

export const TableHeader = styled.thead`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

export const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
`;

export const TableBody = styled.tbody`
  background: white;
`;

export const TableRow = styled.tr`
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:nth-child(even) {
    background-color: #f8fafc;
  }
  
  &:hover {
    background-color: #e2e8f0;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.875rem;
  color: #374151;
`;

export const EmailCell = styled(TableCell)`
  color: #3b82f6;
  text-decoration: underline;
  cursor: pointer;
  
  &:hover {
    color: #1d4ed8;
  }
`;

export const SalaryCell = styled(TableCell)`
  font-weight: 600;
  color: #059669;
`;

export const CargoCell = styled(TableCell)`
  font-weight: 500;
  color: #7c3aed;
`;

export const TelefoneCell = styled(TableCell)`
  font-family: 'Courier New', monospace;
  color: #6b7280;
`;

export const ContainerWithoutUsers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #666;
`