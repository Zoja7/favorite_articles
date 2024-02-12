// import React, { useState } from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './CreateArticlesForm.module.css';
// import { addArticle } from 'redux/articles/articles.reducer';

import { useDispatch } from 'react-redux';
import { addArticle } from 'redux/articles/articles.reducer';

const CreateArticlesForm = () => {
  const dispatch = useDispatch();
  // const articles = useSelector(state => state.CreateArticlesForm);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleAddArticle = data => {
    const newArticle = {
      id: nanoid(),
      ...data,
    };

    dispatch(addArticle(newArticle));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Dispatch action to add article
    // dispatch(addArticle({ image, author, text }));
    // Reset form fields after submission
    setTitle('');
    setAuthor('');
    setText('');
  };

  return (
    <form className={css.userFormWrapper} onSubmit={handleSubmit}>
      <div className={css.userFormLabelWrapper}>
        {' '}
        <label className={css.userFormLabel} htmlFor="author"></label>
        <input
          className={css.userFormText}
          type="text"
          id="author"
          name="author"
          onChange={e => setAuthor(e.target.value)}
          value={author}
          required
          placeholder="author"
        />
      </div>
      <div className={css.userFormLabelWrapper}>
        <label className={css.userFormLabel} htmlFor="title"></label>
        <input
          className={css.userFormText}
          type="text"
          id="title"
          name="title"
          onChange={e => setTitle(e.target.value)}
          value={title}
          required
          placeholder="text"
        />
      </div>
      <div className={css.userFormLabelWrapper}>
        {' '}
        <label className={css.userFormLabel} htmlFor="text"></label>
        <textarea
          className={css.userFormTextarea}
          id="text"
          name="article"
          onChange={e => setText(e.target.value)}
          value={text}
          required
          placeholder="text"
        />
      </div>

      <button className={css.userFormButton} type="submit">
        Add Article
      </button>
    </form>
  );
};

export default CreateArticlesForm;
