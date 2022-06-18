import ProjectCard from "../ProjectCard";

export const Projects = () => {
	return (
		<section id="projects" className="projects section is-medium">
			<div className="projects-container">
				<h1>Projects</h1>
				<div className="columns">
					<div className="column is-multiline is-6">
						<ProjectCard username="janleigh" repository="portfolio" />
						<ProjectCard username="janleigh" repository="rieko" />
					</div>
					<div className="column is-multiline is-6">
						<ProjectCard username="janleigh" repository="trace.moe.ts" />
					</div>
				</div>
				<h1>Commissions</h1>
				<div className="colums">
					<div className="column is-full">
						<p
							style={{
								textAlign: "center",
								fontSize: "1.2rem"
							}}
						>
							Hm. Well, this is awkward. There seems nothing in here.
							<br />
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
