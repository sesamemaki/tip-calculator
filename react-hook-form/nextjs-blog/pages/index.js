import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Home() {
  const [submitData, setSubmitData] = useState();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});
  const onSubmit = (data) => setSubmitData(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>React Hook Form Example</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        ></link>
      </Head>

      <main>
        <h1 className={styles.title}>React Hook Form Example</h1>

<div className={styles.grid}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.card}>
          <div className="">
            <label className="">
              <span className="">First Name:</span>
            </label>
            <div>
              <input
                {...register("firstName", { required: true })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
              {errors.firstName?.type === "required" && (
                <p>First name is required</p>
              )}
            </div>
          </div>
          <div className="">
            <div>
              <label className="">
                <span className="">Last Name:</span>
              </label>
            </div>
            <input
              {...register("lastName", { required: true })}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName?.type === "required" && (
              <p>Last name is required</p>
            )}
          </div>
          <div className="">
            <div>
              <label className="">
                <span className="">Email:</span>
              </label>
            </div>
            <input
              {...register("mail", { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p>{errors.mail?.message}</p>}
          </div>
          <div className="">
            <div>
              <label className="">
                <span className="">Phone:</span>
              </label>
            </div>
            <input
              type="number"
              {...register("phone", { required: true })}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone?.type === "required" && (
              <p>Phone number is required</p>
            )}
          </div>
          <div className="">
            <input
              {...register("checkbox", { required: true })}
              type="checkbox"
              aria-invalid={errors.phone ? "true" : "false"}
              name="checkbox"
            />
            <label className="" htmlFor="checkbox">
              I confirm that the information I have given is correct.
            </label>
            {errors.checkbox?.type === "required" && (
              <p>You must confirm that the information given is correct.</p>
            )}
          </div>

          <input type="submit" />
        </form>
</div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Submitted Data &rarr;</h3>

            {submitData && (
              <>
                <p>First Name: {submitData.firstName}</p>
                <p>Last Name: {submitData.lastName}</p>
                <p>Email: {submitData.mail}</p>
                <p>Phone: {submitData.phone}</p>
              </>
            )}
          </div>
        </div>
      </main>

      <style jsx>{`
        main {
          
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        code {
          background: #fafafa;
          border-radius: 5px;
      
          font-size: 1.1rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;`}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
