export interface Jobs {
    job_id: { id: string; name: string };
    company_mailid: string | null;
    title: string | null;
    job_type: string | null;
    location: string | null;
    industry: string | null;
    company: string | null;
    remote_policy: string | null;
}
