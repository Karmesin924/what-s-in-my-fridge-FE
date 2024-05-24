import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  /*
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedData = await axios.get(
          `http://210.109.52.15/post/${id}/get`
        );
        setPost(fetchedData.data);
      } catch (error) {
        alert('글 정보를 불러오는데 오류가 있습니다.');
        console.log('글 불러오기 오류 => ' + error);
      }
    };
  });
  */

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const dummyData = [
          {
            id: 1,
            title: '첫번째 게시물',
            contents: '첫번째 게시물 내용',
            nickname: '사용자1',
            createdDate: '2023-05-22T10:00:00Z',
            author: true,
            image: 'https://via.placeholder.com/150',
          },
          {
            id: 2,
            title: '두번째 게시물',
            contents: '두번째 게시물 내용',
            nickname: '사용자2',
            createdDate: '2023-05-21T11:00:00Z',
            author: false,
            image: null,
          },
          {
            id: 3,
            title: '세번째 게시물',
            contents: '세번째 게시물 내용',
            nickname: '사용자3',
            createdDate: '2023-05-20T12:00:00Z',
            author: false,
            image: 'https://via.placeholder.com/150',
          },
        ];

        const post = dummyData.find((post) => post.id === parseInt(id));
        setPost(post);
      } catch (error) {
        alert('정보를 불러오는데 오류가 발생했습니다. ' + error);
      }
    };

    fetchPost();
  }, [id]);

  const handleEdit = () => {
    navigate(`/Write/${id}`, { state: { isEditMode: true } });
  };

  const handleDelete = () => {
    axios
      .delete(`/Post/${id}`)
      .then(() => {
        alert('글이 삭제되었습니다!');
        navigate('/board/1');
      })
      .catch(() => {
        alert('글 삭제 중 오류가 발생했습니다.');
      });
  };

  if (!post) {
    return <div>Loading...</div>;
  }

    return (
        <div>
            <Header />
            <div className="flex flex-col items-center bg-blue-100 min-h-screen">
                <div className="mt-5 border-b-4 w-5/6"></div>
                <div className="flex flex-row items-center p-2 font-bold text-2xl border-b-4 w-5/6 bg-blue-100">
                    <div className="Jua-font flex justify-start text-start w-auto text-blue-900 bg-blue-100">
                        <p>{post.title}</p>
                    </div>
                </div>
                <div className="flex flex-col w-5/6 text-left">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="Jua-font text-blue-900">{post.nickname}</p>
                            <p className="Jua-font text-blue-900">
                                {new Date(post.createdDate).toLocaleString('ko-KR', {
                                    year: '2-digit',
                                    month: '2-digit',
                                    day: '2-digit',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </p>
                        </div>
                        {post.author && (
                            <div className="flex flex-row Jua-font h-10">
                                <button className="border-2 border-sky-900 bg-blue-200 rounded-2xl" onClick={handleEdit}>&nbsp;수정&nbsp;</button>
                                <span className="pl-2">&nbsp;</span>
                                <button className="border-2 border-sky-900 bg-blue-200 rounded-2xl" onClick={handleDelete}>&nbsp;삭제&nbsp;</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="Jua-font text-blue-900 border-b-4 w-5/6 break-words text-left">
                    <div className="Jua-font text-blue-900 border-t-2 p-2 pt-10 pb-10 font-semibold text-lg">
                        {post.contents}
                    </div>
                    {post.image && (
                        <div className="pt-2 pb-2">
                            <img src={post.image} alt="Post image" className="w-full" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Post;
