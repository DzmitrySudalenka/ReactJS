import React, {useEffect, useState} from 'react';
import Loader from 'react-loader-spinner';
import './withLoadingDelay.css';

const withLoadingDelay = (WrappedComponent) => {

  return (props) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const isLoadingTimer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => { clearTimeout(isLoadingTimer) };
    });

    let cardContent = <Loader type="Oval" color="salmon" height={80} className="with-loading-delay-loader" />;

    if (!isLoading) {
      cardContent = <WrappedComponent {...props}/>;
    }

    return (
      <div className="with-loading-delay-wrap">
        {cardContent}
      </div>
    );

  };

};

export default withLoadingDelay;
