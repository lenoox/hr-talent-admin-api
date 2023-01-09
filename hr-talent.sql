INSERT INTO public.locations (location_key,location_name) VALUES ('WARSAW','Warszawa') ON CONFLICT DO NOTHING;
INSERT INTO public.locations (location_key,location_name) VALUES ('CRACOW','Kraków') ON CONFLICT DO NOTHING;
INSERT INTO public.locations (location_key,location_name) VALUES ('WROCLAW','Wrocław') ON CONFLICT DO NOTHING;
INSERT INTO public.locations (location_key,location_name) VALUES ('GDANSK','Gdańsk') ON CONFLICT DO NOTHING;
INSERT INTO public.locations (location_key,location_name) VALUES ('Tricity','Trójmiasto') ON CONFLICT DO NOTHING;
INSERT INTO public.locations (location_key,location_name) VALUES ('POZNAN','Poznań') ON CONFLICT DO NOTHING;
INSERT INTO public.locations (location_key,location_name) VALUES ('GDYNIA','Gdynia') ON CONFLICT DO NOTHING;
INSERT INTO public.locations (location_key,location_name) VALUES ('LUBLIN','Lublin') ON CONFLICT DO NOTHING;

INSERT INTO public.seniorities (seniority_key,seniority_name) VALUES ('TRAINEE','Stażysta') ON CONFLICT DO NOTHING;
INSERT INTO public.seniorities (seniority_key,seniority_name) VALUES ('JUNIOR','Junior') ON CONFLICT DO NOTHING;
INSERT INTO public.seniorities (seniority_key,seniority_name) VALUES ('MID','Mid') ON CONFLICT DO NOTHING;
INSERT INTO public.seniorities (seniority_key,seniority_name) VALUES ('SENIOR','Senior') ON CONFLICT DO NOTHING;
INSERT INTO public.seniorities (seniority_key,seniority_name) VALUES ('EXPERT','Expert') ON CONFLICT DO NOTHING;