## Introduction
Hi 👋

This is my portfolio made with [Next.js](https://nextjs.org), available at [ethanleneind.re](https://ethanleneind.re).
<br><img src="https://github.com/user-attachments/assets/56d6b2ad-8793-4fae-b209-8e882d858f27" style="height: 300px;"/><br>
You may want to create your own from it, so here is a guide of installation!

## Summary
- [Installation](#installation)
- [projects.json structure](#projectsjson-structure)
- [skills.json structure](#skillsjson-structure)
- [links.json structure](#linksjson-structure)
- [Contact](#contact)

## Installation
1- Install the project on your computer and unzip it.

Don't forget to add the different pictures you want in the public folder, it didn't put them to not overload the git space. You will also need to create locale files int the ``locales/`` folder, for en and fr translation (you will need to modify the change language button if you want to put more locales), and also a ``data/`` folder with [``projects.json``](#projectsjson-structure), [``skills.json``](#skillsjson-structure) and [``links.json``](#linksjson-structure) files.

2- When your data files are created, you can :
  - Install your assets with the following command
    ```bash
    npm i
    # or
    pnpm i
    ```
  - Run your project in local
    ```bash
    npm run dev
    # or
    pnpm dev
    ```
  - Open [http://localhost:3000](http://localhost:3000).

## projects.json structure
```json
{
    "en_cours": { 
        "project1": {
            "name": "Project 1",
            "technologies": [
                "PhP",
                "HTML",
                "CSS"
            ],
            "frameworks": [
                "Laravel",
                "TailwindCSS",
            ],
            "workers": [
                "TintinLeGrand",
                "TintinLePetit"
            ],
            "image": "/projects/project1.png",
            "link": "https://project1.website.com"
        },
        "project2": {
            "name": "Project 2",
            "technologies": [
                "JavaScript",
                "HTML",
                "CSS",
                "TypeScript"
            ],
            "frameworks": [
                "Next.JS",
                "TailwindCSS",
                "Flowbite",
                "Material design"
            ],
            "workers": [
                "TintinLeGrand"
            ],
            "image": "/projects/project2.png",
            "link": "https://project2.com"
        }
    },
    "futurs" : {
        "futureProject" : {
            "name": "Future project",
            "technologies": [
                "Go",
            ],
            "frameworks": [
                "React",
                "Next.js",
                "Expo",
                "TailwindCSS",
                "Flowbite"
            ],
            "workers": [
                "TintinLeGrand"
            ],
            "image": "/bg/plage.jpg"
        },
    }
}
```

## skills.json structure
🚨 _Don't forget to add the image link in next config file to make the image displayable_
```json
{
    "skills": {
        "languages": {
            "Javascript": {
                "knowledge": {
                    "text": "advanced",
                    "value": 65
                },
                "url": "https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png"
            },
            "HTML": {
                "knowledge": {
                    "text": "expert",
                    "value": 90
                },
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
            },
            "CSS": {
                "knowledge": {
                    "text": "expert",
                    "value": 90
                },
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/langfr-1920px-Official_CSS_Logo.svg.png"
            },
            "TypeScript": {
                "knowledge": {
                    "text": "intermediate",
                    "value": 40
                },
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
            }
        },
        "frameworks": {
            "TailwindCSS": {
                "knowledge": {
                    "text": "expert",
                    "value": 90
                },
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1540px-Tailwind_CSS_Logo.svg.png"
            },
            "Next.JS": {
                "knowledge": {
                    "text": "advanced",
                    "value": 65
                },
                "url": "https://raw.githubusercontent.com/github/explore/2ebcebd7b163b2ab12cb5a40bf29264799c81c03/topics/nextjs/nextjs.png"
            },
            "React": {
                "knowledge": {
                    "text": "advanced",
                    "value": 65
                },
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
            }
        },
        "tools": {
            "Docker": {
                "knowledge": {
                    "text": "intermediate",
                    "value": 40
                },
                "url": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png"
            },
            "Kubernetes": {
                "knowledge": {
                    "text": "intermediate",
                    "value": 40
                },
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png"
            }
        }
    }
}
```

## links.json structure
```json
{
    "socials": {
        "linkedin": "https://www.linkedin.com/company/reactofficial/",
        "github": "https://github.com/reactjs",
        "bluesky": "https://bsky.app/profile/react.dev"
    }
}
```

## Contact
If you have a few question, you can email me at [ethan.leneindre@4fromages.fr](mailto:ethan.leneindre@4fromages.fr). I would be pleased to help you.
