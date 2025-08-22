export function Profile() {
    return (
        <article className="p-10 flex flex-col gap-4 border h-fit rounded-xl w-90 items-center">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQHaSe8C8mAn9g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723162671877?e=2147483647&v=beta&t=dve5Ya6Ga0Tl7-QWF08LLnjkPXp9ns329LQ-nRQGdjo" alt="profile" className="object-cover size-25 rounded-full"/>
            <h3 className="text-xl font-semibold">Deivyson05</h3>
            <span>FullStack Developer</span>
            <span>Repositorios - 35</span>
        </article>
    );
}