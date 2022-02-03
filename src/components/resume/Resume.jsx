import ResumeContent from './ResumeContent'
import ResumeBasicDetails from './ResumeBasicDetails'
import './style/Resume.scss'

function Resume() {
  return (
      <div className='resume-container'>
          <ResumeBasicDetails />
          <ResumeContent />
      </div>
  )
}

export default Resume;
