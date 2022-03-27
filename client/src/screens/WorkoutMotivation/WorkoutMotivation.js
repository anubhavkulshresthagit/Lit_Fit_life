import React from 'react'
import {Alert} from 'react-bootstrap'

const WorkoutMotivation = () => {
    return (
        <div className="container my-4">
            <h2 className="text-center my-5">Workout Motivation</h2>
            <h3 className="text-center my-3">Today I will do what others won't, so tomorrow I can accomplish what others can't</h3>
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="100%" height="550" src="https://sketchfab.com/models/16c3f4d5a2a24375a13f0960ced391c0/embed"></iframe>

            <div className="container my-5">
                <h2 className="text-center my-5">Workout videos</h2>
                <div className="d-flex">
                <iframe className="d-block mx-auto" width="560" height="315" src="https://www.youtube.com/embed/BHY0FxzoKZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="d-block mx-auto" width="560" height="315" src="https://www.youtube.com/embed/phB6ITV66mM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="my-3">
            <h2 className="text-center">Workout Quotes</h2>
            <Alert variant="dark">
                <h4 className="links text-center ">The only person you are destined to become is the person you decide to be</h4>
            </Alert>
            <Alert variant="dark">
                <h4 className="links text-center ">Once you learn to quit, it becomes a habit</h4>
            </Alert>
            <Alert variant="dark">
                <h4 className="links text-center ">A year from now you may wish you had started today.</h4>
            </Alert>
            </div>
        </div>
    )
}

export default WorkoutMotivation
