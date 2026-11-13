CREATE TABLE public.client_feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  rating smallint NOT NULL,
  service text,
  feedback text NOT NULL,
  email text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.client_feedback TO service_role;

ALTER TABLE public.client_feedback ENABLE ROW LEVEL SECURITY;