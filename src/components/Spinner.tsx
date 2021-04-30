import styled from "styled-components";

interface SpinnerProps {
  size: number;
}

const Loading = styled.div`
  width: ${({ size }: SpinnerProps) => `${size}rem`};
  height: ${({ size }: SpinnerProps) => `${size}rem`};
`;

export default function Spinner({ size }: SpinnerProps) {
  return (
    <Loading size={3} className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </Loading>
  );
}
