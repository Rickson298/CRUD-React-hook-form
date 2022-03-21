import * as C from "./styles";
import { AiFillStar } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";
import { Icon } from "../icon/Icon";
import { useApi } from "../../hooks/useApi";
import { useNavigate } from "react-router";

interface PropsBook {
  name: string;
  author: string;
  description: string;
  rating: string | number;
  id: number;
}

export const Book: React.FC<PropsBook> = ({
  name,
  author,
  description,
  id,
  rating,
}) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const { getData, deleteData } = useApi();
  const navigate = useNavigate();

  return (
    <C.Container isDeleted={isDeleted}>
      <div className="header-book">
        <span className="book-name">{name}</span>
        <span className="book-author">{author}</span>
      </div>
      <div className="book-description">{description}</div>
      <C.Stars>
        {Array.from({ length: Number(rating) }).map(() => (
          <AiFillStar color="gold" />
        ))}
      </C.Stars>
      <C.IconsBook>
        <Icon
          onClick={async () => {
            await deleteData(`/books/${id}`);
            // getData("/books");
            setIsDeleted(true);
          }}
          background="red"
          icon={<BsTrash />}
        />
        <Icon
          onClick={() => navigate(`/edit-book/${id}`)}
          icon={<BiPencil />}
        />
      </C.IconsBook>
    </C.Container>
  );
};
