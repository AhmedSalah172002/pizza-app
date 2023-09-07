import React from 'react'
import ReactStars from "react-rating-stars-component";
import icon from "../../images/User-Account-Person-PNG-File.png"
import ReviewProfile from './ReviewProfile';
import { useParams } from 'react-router-dom';
import AddReviewHook from '../../hook/review/AddReviewHook';
import { ToastContainer } from 'react-toastify'
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import ViewAllReviewHook from '../../hook/review/ViewAllReviewHook';
import Pagination from '../utils/Pagination';
const Review = () => {
 

const {ProductId}=useParams()

const [name ,ratings ,user ,onSubmit ,OnChangeRateText ,OnChangeRateValue]=AddReviewHook(ProductId)
const [allReview, onPress ,pageCount] =ViewAllReviewHook(ProductId)
const customIcons = {
  1: <FrownOutlined/>,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
const tooltips = ["سيء للغاية", "سيء", "جيد", "جيد جداَ", "ممتاز"]
  return (
    <div dir='rtl' className="review mt-5 mb-5">
        <div className="container">
            <div className="review-create mb-5">
           <div className='mb-3'>
           <ReviewProfile  icon={user.profileImg || icon} name={user.name}/>
           </div>
          <h5>تقييمك : </h5>
          <Rate style={{fontSize:"1.8em"}}  tooltips={tooltips} onChange={OnChangeRateValue} character={({ index }) => customIcons[index + 1]} />
          <div className="review-text mt-3">
            <textarea onChange={(e)=> OnChangeRateText(e)} value={name} name="review-text" id="review-text" placeholder='اكتب تعليف' rows="8"></textarea>
          </div>

          <button onClick={()=> onSubmit()} className="add-review">إضافة</button>
            </div>
            <div className="allreviews mb-3">
            <h5 className='mb-5'>التعليقات :</h5>

            {
              allReview?allReview.data ? allReview.data.map((e,i)=>{
                return(
                  
            <div key={i} className="single-review mb-3 mt-2">
            <div className='mb-1'>
            <ReviewProfile icon={e.user.profileImg ||icon} name={`${e.user.name}  ★ ${e.ratings}  `}/>
            </div>
            <p className='me-4'>{e.name}</p>
            </div>
                )
              }) : <h3>لايوجد تقييمات</h3> : null
            }

            
            
            </div>
            <Pagination pageCount={pageCount} onPress={onPress} />
        </div>
        <ToastContainer />
    </div>
  )
}

export default Review
