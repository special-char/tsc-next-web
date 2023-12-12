"use client"
import PlayButton from '@/public/icons/play-button.svg';
import VideoDialog from '@/ui/VideoDialog';


export default function CourseVideoModal({url}:{url:string}){
    return<> <div
    className="testimonial_card__img__hover_icon !w-[13%] "
    onClick={() => {
      const model = document.getElementById("videomodel");
      return model.showModal();
      }}
    >
    <div className='md:pl-2 md:pt-1'>

    <PlayButton className="max-sm:w-6 w-16 aspect-square max-sm:ml-[4px]" />
    </div>
  </div><dialog id="videomodel" >
        <form method="dialog">
          <VideoDialog src={url || ''} />
          
        </form>
      </dialog></>
}