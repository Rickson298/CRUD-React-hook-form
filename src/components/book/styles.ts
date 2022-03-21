import styled from "styled-components";

interface PropsBook {
  isDeleted: boolean;
}

export const IconsBook = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  top: 15px;
  right: 15px;
  transition: all ease 0.2s;
  opacity: 0;
`;

export const Container = styled.div<PropsBook>`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  height: ${({ isDeleted }) => (isDeleted ? "0px" : "150px")};
  padding: ${({ isDeleted }) => (isDeleted ? "0px" : "15px")};
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background: ${({ theme: { colors } }) => colors.backgroundSecundary};
  border: ${({ isDeleted, theme: { colors } }) => !isDeleted && colors.border};
  color: ${({ theme: { colors } }) => colors.textPrimary};
  margin-bottom: ${({ isDeleted }) => (isDeleted ? "0px" : "30px")};
  position: relative;
  overflow: hidden;
  &:hover {
    background: ${({ theme: { colors } }) => colors.backgroundPrimary};
  }

  .header-book {
    width: 100%;
    height: max-content;
    margin-bottom: 5px;
    @media (max-width: 750px) {
      display: flex;
      flex-direction: column;
    }
  }

  .book-description {
    height: 100%;
    text-overflow: ellipsis;
    @media (max-width: 750px) {
      font-size: 12px;
    }
  }

  .book-name {
    font-size: 22px;
    font-weight: 600;
    margin-right: 15px;
    @media (max-width: 750px) {
      font-size: 16px;
      width: 100%;
    }
  }

  .book-author {
    @media (max-width: 750px) {
      font-size: 12px;
    }
  }

  &:hover ${IconsBook} {
    opacity: 1;
  }
`;

export const Stars = styled.div`
  display: flex;
  justify-content: end;
  gap: 5px;
  height: max-content;
`;
