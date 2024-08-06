import React from 'react';

const Error: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center pt-25vh">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">ERREUR : </strong>
                <span className="block sm:inline">Un problème est survenu lors du chargement du fichier CSV</span>
            </div>
        </div>
    );
};

export default Error;
