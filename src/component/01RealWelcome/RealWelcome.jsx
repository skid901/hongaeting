import React, { useState, useEffect, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { useParams, useHistory } from 'react-router-dom';
import { MobXProviderContext } from 'mobx-react';
import axios from 'axios';
import './RealWelcome.scss';

const RealWelcome = () => {
  return (
    <div className="image">
      <div className="tiledBackground"></div>
    </div>
  );
};

export default RealWelcome;
