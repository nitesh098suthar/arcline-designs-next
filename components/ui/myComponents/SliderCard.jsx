import React from "react";
import { c_cppTopics } from "./Topics.js";
import { pythonTopics } from "./Topics.js";
import { nodeExpressTopics } from "./Topics.js";
import { reactTopics } from "./Topics.js";
import { javascriptTopics } from "./Topics.js";

const SliderCard = () => {
  return (
    <>
      <div className="mainWrapper">
        <div className="minWrapper">
          <div className="Scroller">
            <div className="taglist">
              {javascriptTopics?.map((item, i) => {
                return (
                  <p
                    key={i}
                    className="bg-white m-2 px-4 py-2 rounded-lg w-max"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="taglist">
              {javascriptTopics?.map((item, i) => {
                return (
                  <p
                    key={i}
                    className="bg-white m-2 px-4 py-2 rounded-lg w-max"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="minWrapper">
          <div className="Scroller rev">
            <div className="taglist">
              {c_cppTopics?.map((item, i) => {
                return (
                  <p
                    key={i}
                    className="bg-white m-2 px-4 py-2 rounded-lg w-max"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="taglist">
              {c_cppTopics.map((item, i) => {
                return (
                  <p
                    key={i}
                    className="bg-white m-2 px-4 py-2 rounded-lg w-max"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="minWrapper">
          <div className="Scroller">
            <div className="taglist">
              {reactTopics.map((item, i) => {
                return (
                  <p
                    key={i}
                    className="bg-white m-2 px-4 py-2 rounded-lg w-max"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="taglist">
              {reactTopics.map((item, i) => {
                return (
                  <p
                    key={i}
                    className="bg-white m-2 px-4 py-2 rounded-lg w-max"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="minWrapper">
          <div className="Scroller rev">
            <div className="taglist">
              {pythonTopics.map((item, i) => {
                return (
                  <p
                    key={i}
                    className="bg-white m-2 px-4 py-2 rounded-lg w-max"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="taglist">
              {pythonTopics.map((item, i) => {
                return (
                  <p
                    key={i}
                    className="bg-white m-2 px-4 py-2 rounded-lg w-max"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="minWrapper">
          <div className="Scroller">
            <div className="taglist">
              {nodeExpressTopics.map((item, i) => {
                return (
                  <p
                    key={i}
                    className="bg-white m-2 px-4 py-2 rounded-lg w-max"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="taglist">
              {nodeExpressTopics.map((item, i) => {
                return (
                  <p
                    key={i}
                    className="bg-white m-2 px-4 py-2 rounded-lg w-max"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
