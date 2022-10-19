import React from "react";
import { useState } from "react";
import {useLoading} from "./lib/http/useLoading";
import {ErrorView} from "./lib/ErrorView";
import {LoadingView} from "./lib/LoadingView";
import logo from '../public/img/sheep.gif';
import '../public/css/RegistrerForflytning.css';
import {useSubmit} from "./lib/http/useSubmit";
import {postJson} from "./lib/http/http";

function RegistrerForflytning({ data }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const { handleSubmit: handleForflytning, submitting, error } = useSubmit(
      async () => {
        await postJson("http://localhost:5000/registrerforflytning",  [{
          "dyrehold-id": inputs.dyrehold,
          "individ": [
            inputs.fra,
            inputs.til
          ],
          "sted": inputs.sted,
        }]);
      },
       () => console.log("Dyrehold: " + inputs.dyrehold + " endret."),
      );

  if (error) {
    return <ErrorView error={error} />;
  }

  return (
    <div id="main" className="RegistrerForflytning">
      <header id="head" className="RegistrerForflytning-header">
        <img id="logo" src={logo} className="RegistrerForflytning-logo" alt="logo" />
        <div id="form" className="RegistrerForflytning-form">
        <form className="submitForm" onSubmit={handleForflytning}>
          <div className="col">
            <label>Identifiser dyrehold:</label>
            <select
              className="formInput"
              required
              name="dyrehold" 
              defaultValue=""
              onChange={handleChange}
            >
              <option value="" disabled>Velg dyrehold ...</option>
              <option value="2512341">Dyrehold 1</option>
              <option value="2512342">Dyrehold 2</option>
              <option value="2512343">Dyrehold 3</option>
              <option value="2512344">Dyrehold 4</option>
            </select>
          </div>
          <div className="col">
            <label>Individ merke(r):</label>
            <div className="row">
              <input
                className="formInput"
                required
                type="number" 
                name="fra"
                placeholder="fra"
                value={inputs.fra || "fra"} 
                onChange={handleChange}
              />
              <input
                className="formInput"
                required
                type="number" 
                name="til"
                placeholder="til"
                value={inputs.til || "til"} 
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col">
            <label>Produksjonsplass:</label>
              <select
                className="formInput"
                id="sted"
                required
                name="sted"
                onChange={handleChange}
                defaultValue="">

                <option value="" disabled>Velg produksjonsplass ...</option>
                {data.map(b => (
                    <option key={b.produksjonsplassid} value={b.produksjonsplassid}>{b.kommunenummer}-{b.gaardsnummer}/{b.bruksnummer}</option>
                ))}

              </select>
          </div>
          <input className="formButton" type="submit" name="registrer" disabled={submitting}/>
        </form>
        </div>
      </header>
    </div>
  );
}

export default function GetRegistrerForflytning ({ forflytningApi }) {
  const { data: data, loading, error, reload } = useLoading(
      async () => await forflytningApi.getAllRegistrations(),
      []
  );

  if (error) {
    return <ErrorView error={error} reload={reload()} />;
  }

  if (loading || !data) {
    return <LoadingView />;
  }

  return <RegistrerForflytning data={data}/>;
}