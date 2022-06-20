import * as React from 'react';
import './Main.scss';
// import { Job } from '../../../assets/type';

interface MainProps {
    job: any[];
    handleChange: (event: number) => void;
    value: number;
}
export const Main: React.FC<MainProps> = (props: MainProps) => {
    let value = props.value;
    return (
        <section>
            <h1>Jobs</h1>
            <div>
                {
                    props.job.map((job, index) => {
                        return (
                            <button key={job.id} onClick={() => props.handleChange(index)}>
                                {job.company}
                            </button>
                        )
                    })}
            </div>
            <article>
                {
                    props.job[value] && (
                        <div key={props.job[value].id}>
                            <h2>{props.job[value].title}</h2>
                            <h3>{props.job[value].company}</h3>
                            <p>{props.job[value].dates}</p>
                            {props.job[value].duties.map((duty: string, i: number) => (
                                <div key={i}>*** {duty}</div>
                            ))}
                        </div>
                    )
                }
                <button type="button">More Info</button>
            </article>
        </section>
    )
}