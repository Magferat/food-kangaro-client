import React from 'react';

const Review = () => {
    return (
        <div className="my-5">
            <h2 className="text-center text-danger">Review of Our Customer </h2>
            <div className="card-group container">
                <div className="card m-2 h-100 px-3 py-2 shadow-lg text-center">
                    <img
                        src="https://cdn.dribbble.com/users/7822602/screenshots/16181158/media/e9992b0318ce887b916285f35bf11605.jpg?compress=1&resize=400x300" className="card-img-top rounded-circle" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Khalid Farhan</h5>
                        <h6>Businessman </h6>
                        <p className="card-text"> love the fact that FoodKangaroo eats allows me to order food and have it delivered on super busy days in the office. The promotions and wide variety of restaurants available help ease the day-to-day grind.</p>
                    </div>
                </div>
                <div className="card m-2 h-100 px-3 py-3 shadow-lg text-center">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLTd_eWsmLkiJmLj6M8IMDpvH4XKWtSiDFXMA0CgrQ=s900-c-k-c0x00ffffff-no-rj" className="card-img-top rounded-circle" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Enayet chowdhury</h5>
                        <h6>Lecturer, BUET</h6>
                        <p className="card-text">The best thing about FoodKengaroo is that it helps in ordering food from your favourite restaurants.It gave so many interesting offers while ordering food. </p>

                    </div>
                </div>
                <div className="card m-2 h-100 px-3 py-3 shadow-lg text-center">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLQUc5eUblAmd5OaHakNhtr2L9BSCyN_2duY1tcbIw=s900-c-k-c0x00ffffff-no-rj" className="card-img-top rounded-circle" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Sadmaan Sadik</h5>
                        <h6>Writer, Alien </h6>
                        <p className="card-text">Easy to access receipts for expense reporting. The service also lets users send credits to users, helping get per diems to employees..</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;