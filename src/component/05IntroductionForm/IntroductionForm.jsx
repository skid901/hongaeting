import React from 'react';
import { Link } from 'react-router-dom';

import './IntroductionForm.scss';

function IntroductionForm() {
  return (
    <div className="intriduction-form">
      <div className="comment">
        {`설문지 제출 완료 후 `}
        <Link to="/selfdatinglist">셀소 리스트</Link>
        {`로 이동`}
      </div>
      <div className="iframe-wrapper">
        <iframe
          title="introduction-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSe3ZU06TvwUbDmNaFiP-4SxMMRFtuJUWY_HYRM2KRFqSUacfg/viewform?embedded=true"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          로드 중…
        </iframe>
      </div>
    </div>
  );
}

export default IntroductionForm;
