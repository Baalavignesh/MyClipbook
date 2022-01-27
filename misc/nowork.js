  // useEffect(() => {
  //   console.log("------------------------------------------------------");
  //   const calculateHeightWidth = () => {
  //     props.allBoard.forEach((clip, clipNumber) => {
  //       let xDimension = 0;
  //       let yDimension = 0;

  //       console.log("Total Board Length : " + props.allBoard.length);
  //       let lastDigit = clipNumber % 10;
  //       let colNumber = lastDigit < 5 ? lastDigit : lastDigit - 5;

  //       xDimension = 280 * (lastDigit < 5 ? lastDigit : lastDigit - 5);

  //       // We get height of first only when a new note is added
  //       if (props.allBoard.length - clipNumber == 1 && targetRef.current) {
  //         console.log(
  //           `clipnumber is ${clipNumber}, prev Index is ${
  //             props.allBoard.length - 2
  //           }`
  //         );
  //         let previousNoteIndex = props.allBoard.length - 2;
  //         console.log(previousNoteIndex);
  //         clipDimension[previousNoteIndex].y = targetRef.current.offsetHeight;
  //         yDimension = 0;
  //       }

  //       // yDimension = allDimension[colNumber - 1].y;

  //       clipDimension.push({
  //         x: xDimension,
  //         y: yDimension,
  //         transformStyle: {
  //           transform: `translate(${xDimension}px, ${yDimension}px)`,
  //         },
  //       });
  //     });

  //     setClipDimension(clipDimension);
  //     console.log(clipDimension);
  //   };

  //   calculateHeightWidth();
  // }, [props.allBoard]);

  // useLayoutEffect(() => {
  //   if (targetRef.current) {
  //     // console.log(targetRef.current.offsetHeight);
  //   }
  // }, [props.allBoard]);

  // useLayoutEffect(() => {
  //   console.log("checking before rendering");

  //   calculateHeightWidth();
  // });