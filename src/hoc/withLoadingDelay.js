import React, {useEffect, useState} from 'react';
import Loader from 'react-loader-spinner';
import './withLoadingDelay.css';

const withLoadingDelay = (WrappedComponent) => {

  return (props) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });

    let cardContent = <Loader type="Oval" color="salmon" height={80} className="card-loader" />;

    if (!isLoading) {
      cardContent = <WrappedComponent {...props}/>;
    }

    return (
      <div className="card-wrap">
        {cardContent}
      </div>
    );

  };

};

export default withLoadingDelay;