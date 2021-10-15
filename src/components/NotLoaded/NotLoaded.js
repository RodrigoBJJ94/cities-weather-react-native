import React from 'react';
import StatusBarMain from '../StatusBar/StatusBarMain';
import Loading from './Loading';

export default function NotLoaded() {
    return (
        <>
            <StatusBarMain />
            <Loading />
        </>
    );
};
