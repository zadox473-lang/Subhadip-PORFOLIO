/* =========================================================
   YOUR BUILD LOG: add a new project here, then push to GitHub.
   The "More Builds" section shows them automatically, in a row.

   How to add a project:
   1. Put its photo in  public/images/projects/  (jpg, png or webp)
   2. Copy one block below, and change the values.
   3. Commit + push. Done.

   image   : file name only, e.g. 'robot-car.jpg'
             (leave '' to show a placeholder until you have a photo)
   github  : link of the repo. Leave '' to hide the button.
   ========================================================= */

export type Build = {
  title: string
  description: string
  image: string
  github: string
  tag?: string
}

export const builds: Build[] = [
  {
    title: 'Autonomous Robot Car',
    description: 'Self-driving robot using computer vision.',
    image: '',
    github: '',
    tag: 'ROBOTICS',
  },
  {
    title: 'Robotic Arm Control',
    description: 'Precision arm control using ROS.',
    image: '',
    github: '',
    tag: 'ROS',
  },
  {
    title: 'AI Face Recognition',
    description: 'Real-time face detection and recognition.',
    image: '',
    github: '',
    tag: 'AI',
  },
  {
    title: 'Drone Automation',
    description: 'Autonomous drone with AI guidance.',
    image: '',
    github: '',
    tag: 'AUTOMATION',
  },
]
