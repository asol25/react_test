import React, { useEffect } from 'react'
import { Main } from './components/MainlLayout/MainSection/Main'
import { Job } from './assets/type';
import movie_Service from './assets/movie-service';

const App: React.FC = () => {
  const [job, setJob] = React.useState<Job[]>([]);
  const [value, setValue] = React.useState<number>(0);
  useEffect(() => {
    movie_Service().then(function (response) {
      setJob(response);
    })
  }, []);

  const handleChange = (event: number) => {
    setValue(event);
  }

  return (
    <div className='container'>
      <Main job={job} handleChange={handleChange} value={value}></Main>
    </div>
  )
}

export default App
