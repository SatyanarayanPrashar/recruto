export interface Profile {
    g_token: { id: string; name: string };
    full_name: string | null;
    profile_photo: string;
    bio: string;
    location: string;
    prefered_roles: string;
    portfolio_link: string;
    linkedin_link: string;
    github_link: string;
    anyother_link: string;
    exp_title: string;
    exp_company: string;
    exp_description: string;
    project_title: string;
    project_link: string;
    project_description: string;
    skills: string;
}
